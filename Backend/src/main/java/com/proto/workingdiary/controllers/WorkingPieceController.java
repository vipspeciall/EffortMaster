package com.proto.workingdiary.controllers;

import com.proto.workingdiary.models.Request;
import com.proto.workingdiary.models.WorkingPiece;
import com.proto.workingdiary.repositories.WorkingPieceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WorkingPieceController {

    @Autowired
    private WorkingPieceRepository workingPieceRepo;

    @CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
    @GetMapping("/getPieces")
    public List<WorkingPiece> workingPieces() {

        return workingPieceRepo.findAll();

    }

    @CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
    @PostMapping("/saveWorkingPiece")
    public String saveWorkingPiece(@RequestBody WorkingPiece workingPiece) {
        try {
            System.out.println(workingPiece);
            if(workingPieceRepo.findAll().isEmpty())
                workingPieceRepo.insert(workingPiece);
            else
                workingPieceRepo.save(workingPiece);
            return HttpStatus.OK + "Başarılı";
        }
        catch(Exception e){
            return "Başarısız - "+e.getMessage();
        }
    }



    @CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
    @DeleteMapping("/deleteWorkingPiece")
    public String deleteWorkingPiece(@RequestBody Request request){

        try{

            workingPieceRepo.deleteById(request.getId());
            return "Başarılı";
        }
        catch (Exception e){
            return "Başarısız " + e.getMessage();
        }

    }

}
