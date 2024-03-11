package com.Humalaft.serviceactor.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Map;

@Document(collection = "actor")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Actor {
 @JsonProperty("form_date")
 private String formDate;

 @JsonProperty("basic_info")
 private BasicInfo basicInfo;

 @JsonProperty("business_info")
 private BusinessInfo businessInfo;

 @JsonProperty("legal_representatives")
 private Map<String, LegalRepresentatives> legalRepresentatives;

 @JsonProperty("directives")
 private Map<String, Directive> directives;

 @JsonProperty("shareholders")
 private Map<String, ShareHolder> shareholders;

 @JsonProperty("bank_referrals")
 private Map<String, BankReferral> bankReferrals;

 @JsonProperty("commercial_referrals")
 private Map<String, CommercialReferral> commercialReferrals;
 
}
