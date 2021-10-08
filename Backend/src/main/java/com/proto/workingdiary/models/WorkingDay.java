package com.proto.workingdiary.models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Data
@Document
public class WorkingDay {

    @Id
    public String id;
    public String header;
    public String date;



}
