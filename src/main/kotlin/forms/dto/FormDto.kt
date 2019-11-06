package forms.dto

import forms.api.PostalApiResponse
import forms.api.PostalApiService
import forms.domain.FormEntity

data class FormDto(
    val id:Int?,
    val name:String,
    val email:String,
    val phone:Int,
    val areacode:Int,
    val comment:String?
){
    init {
        require(phone in 20000000..99999999){"Phone number must be 8 numbers long and cannot start with 0 or 1"}
        require(name.length>=2){"Name must be at least 2 characters long"}
        require(areacode in 0..9999){"Areacode must be between 0000 and 9999"}
        require(phone !in 58000000..59999999){"Phone numbers between 58000000 and 58999999 are reserved for M2M/IoT"}
        //Email regex gotten from https://emailregex.com/
        val emailregex=Regex("(?:[a-z0-9!#\$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#\$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])")
        require(email.matches(emailregex)){"Email must follow standard guidelines, e.g. example@domain.com"}
        val postalApi= PostalApiService()
        val validAreacode:PostalApiResponse=postalApi.getPostal(areacode)
        require(validAreacode.valid){"Areacode is not valid"}
    }

    constructor(entity: FormEntity): this(entity.id,entity.name,entity.email,entity.phone,entity.areacode,entity.comment)
}
