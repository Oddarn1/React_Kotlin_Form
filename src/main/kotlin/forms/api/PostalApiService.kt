package forms.api

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.github.kittinunf.fuel.httpGet
import forms.Exceptions.ApiException
import org.springframework.stereotype.Service

data class PostalApiResponse(val result:String, val valid:Boolean,val postalCodeType:String)

@Service
class PostalApiService{
    private val mapper = jacksonObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
    private val BASE_URL = "https://api.bring.com/shippingguide/api/postalCode.json?"

    fun getPostal(pnr:Int):PostalApiResponse{
        val response= makeHTTPRequest(pnr=pnr)
        return mapper.readValue(response)
    }

    //Default value test.no, api still works as normal
    private fun makeHTTPRequest(clientUrl:String="test.no",pnr:Int):String{
        val (_, _, result) = (BASE_URL+"clientUrl=$clientUrl&pnr=$pnr").httpGet().responseString()
        val (body, error) = result

        return body ?: throw ApiException("$error")
    }
}