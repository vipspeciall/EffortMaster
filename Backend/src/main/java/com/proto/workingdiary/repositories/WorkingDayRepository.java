package com.proto.workingdiary.repositories;

import com.proto.workingdiary.models.WorkingDay;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface WorkingDayRepository extends MongoRepository<WorkingDay,String> {

    List<WorkingDay> findByHeader(String header);
    WorkingDay findByDate(String date);



}
