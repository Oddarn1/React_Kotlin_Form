package forms.Exceptions

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus
import java.lang.RuntimeException

@ResponseStatus(value= HttpStatus.INTERNAL_SERVER_ERROR)
class ApiException(error:String):RuntimeException("Request to API failed, reason: $error")