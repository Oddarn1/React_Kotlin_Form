package forms.domain

import forms.dto.FormDto
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id


@Entity(name="Form")
data class FormEntity(val name:String, val email:String, val phone:Int,val areacode:Int,val comment:String){
    @Id
    @GeneratedValue
    var id:Int=0

    constructor(formDto: FormDto): this(formDto.name,formDto.email,formDto.phone,formDto.areacode,formDto.comment)
}
