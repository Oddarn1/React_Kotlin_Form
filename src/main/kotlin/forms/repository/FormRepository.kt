package forms.repository

import forms.domain.FormEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface FormRepository : JpaRepository<FormEntity, Int>