package forms.service

import forms.service.MailService
import forms.domain.FormEntity
import forms.dto.FormDto
import forms.repository.FormRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class FormService(val formRepository: FormRepository){

    fun getAllForms():List<FormDto>{
        return formRepository.findAll().map{f-> FormDto(f) }.toList()
    }

    fun getFormById(id:Int):FormDto{
        val entity: FormEntity = formRepository.findByIdOrNull(id)?:throw IllegalArgumentException("Id $id not found")
        return FormDto(entity)
    }

    fun createForm(formDto:FormDto):FormDto{
        val formEntity=FormEntity(formDto)
        try {
            val mailService = MailService()
            val response = mailService.sendEmail()
            print(response)
        }catch(e:Exception){
            print(System.getenv("SENDGRID_API_KEY"))
        }
        return FormDto(formRepository.save(formEntity))
    }
}