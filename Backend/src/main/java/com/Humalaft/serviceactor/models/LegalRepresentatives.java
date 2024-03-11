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
public class LegalRepresentatives {
    private String name;
    @JsonProperty("id_type")
    private String idType;
    @JsonProperty("id_number")
    private String idNumber;
    private String nationality;

}
