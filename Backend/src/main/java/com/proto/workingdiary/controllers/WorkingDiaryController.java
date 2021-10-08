package com.proto.workingdiary.controllers;

import com.proto.workingdiary.models.Request;
import com.proto.workingdiary.models.WorkingDay;
import com.proto.workingdiary.repositories.WorkingDayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WorkingDiaryController {

    @Autowired
    private WorkingDayRepository workingDayRepo;

    @CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
    @GetMapping("/getDiaries")
    public List<WorkingDay> workingDiaries() {

        return workingDayRepo.findAll();

    }

    @CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
    @PostMapping("/saveWorkingDay")
    public String saveWorkingDay(@RequestBody WorkingDay workingday){
        try {
            System.out.println(workingday);
            if(workingDayRepo.findAll().isEmpty())
                workingDayRepo.insert(workingday);
            else
                workingDayRepo.save(workingday);
            return HttpStatus.OK + "Başarılı";
        }
        catch(Exception e){
            return "Başarısız - "+e.getMessage();
        }
    }

    @CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
    @PostMapping("/deleteWorkingDay")
    public ResponseEntity deleteWorkingDay(@RequestBody Request request){

        try{

            workingDayRepo.deleteById(request.getId());
            return new ResponseEntity<>("Başarılı", HttpStatus.OK);

        }
        catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>("Başarısız" + e, HttpStatus.NOT_FOUND);
        }
    }
}
