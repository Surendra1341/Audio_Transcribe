package com.audio.audio_transcribe;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;

import org.vosk.Model;
import org.vosk.Recognizer;

import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/api/transcribe")
public class TranscriptionController {

    private final Model model;

    public TranscriptionController() throws IOException {
        // Make sure to download and place the Vosk model in the correct path
        this.model = new Model("models/vosk-model-small-en-us-0.15");
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> transcribe(@RequestParam("file") MultipartFile file) {
        try (InputStream is = file.getInputStream();
             Recognizer recognizer = new Recognizer(model, 16000)) {

            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = is.read(buffer)) >= 0) {
                if (recognizer.acceptWaveForm(buffer, bytesRead)) {
                    // Partial result, can be ignored or used for streaming
                }
            }
            String result = recognizer.getResult();
            System.out.println(result);
            return new ResponseEntity<>(result, HttpStatus.OK);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
}