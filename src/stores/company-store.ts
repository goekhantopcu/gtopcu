import {defineStore} from "pinia";
import {ref} from "vue";
import {CompanyModel} from "../models/company-model";
import companyService from "../services/company-service";

const useCompanyStore = defineStore('company-store', () => {
    const companies = ref<CompanyModel[]>(companyService.companies())
    const setCompanies = (data: CompanyModel[]) => {
        companies.value = data
    }

    const company = ref<CompanyModel>()
    const setCompany = (data: CompanyModel | undefined) => {
        company.value = data
    }

    return {
        companies,
        setCompanies,

        company,
        setCompany
    }
})

export default useCompanyStore
