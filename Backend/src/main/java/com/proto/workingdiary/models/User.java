package com.proto.workingdiary.models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Data
@Document
public class User {

    @Id
    String id;
    String ad;
    String soyAd;
    String kullaniciAdi;
    String sifre;

}
