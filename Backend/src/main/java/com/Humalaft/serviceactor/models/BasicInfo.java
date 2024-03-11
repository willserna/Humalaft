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
public class BasicInfo {

    @JsonProperty("entity")
    private EntityInfo entity;
    @JsonProperty("legal_representative")
    private LegalRepresentative legalRepresentative;
    private String address;
    private String city;
    private String country;
    private String phone;
    @JsonProperty("contact_info")
    private ContactInfo contactInfo;
    @JsonProperty("last_position")
    private String lastPosition;
}
