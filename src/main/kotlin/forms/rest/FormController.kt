package forms.rest

import forms.dto.FormDto
import forms.service.FormService
import org.springframework.web.bind.annotation.*

@RestController
class FormController(val formService:FormService) {

    @GetMapping(path=["/forms"])
    fun getForms():List<FormDto>{
        return formService.getAllForms()
    }

    @GetMapping(path=["/forms/{id}"])
    fun getForm(@PathVariable("id") id:Int):FormDto{
        return formService.getFormById(id)
    }

    @PostMapping(path=["/forms"])
    fun createForm(@RequestBody formDto:FormDto):FormDto{
        return formService.createForm(formDto)
    }
}