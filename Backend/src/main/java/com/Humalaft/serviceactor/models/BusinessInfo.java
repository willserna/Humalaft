package com.Humalaft.serviceactor.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class BusinessInfo {

    @JsonProperty("statutory_activity")
    private String statutoryActivity;
    private String ciiu;
    @JsonProperty("joint-document")
    private String jointDocument;
    @JsonProperty("commercial_registration")
    private String commercialRegistration;
    @JsonProperty("registered_shared_capital")
    private String registeredSharedCapital;
    @JsonProperty("constitution_date")
    private String constitutionDate;
    @JsonProperty("good_or_service")
    private String goodOrService;
    @JsonProperty("company_type")
    private String companyType;
    private String sector;

}