package forms.dto

import forms.api.PostalApiService

data class FormDto(
    val id:Int?,
    val name:String,
    val email:String,
    val phone:Int,
    val areacode:Int,
    val comment:String
){
    init {
        require(phone>=10000000&&phone<=99999999){"Phone number must be 8 numbers long and cannot start with 0"}
        require(name.length>=2){"Name must be at least 2 characters long"}
    }
}