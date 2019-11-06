package forms.dto

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
        //TODO: Validering, epost-varsling
        require(phone in 10000000..99999999){"Phone number must be 8 numbers long and cannot start with 0"}
        require(name.length>=2){"Name must be at least 2 characters long"}
    }

    constructor(entity: FormEntity): this(entity.id,entity.name,entity.email,entity.phone,entity.areacode,entity.comment)
}
