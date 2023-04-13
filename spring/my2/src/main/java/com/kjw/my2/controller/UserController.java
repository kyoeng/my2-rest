package com.kjw.my2.controller;


import com.kjw.my2.service.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Random;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserController {

    // 필드 =====
    private final EmailService emailService;

    // 메서드 =====

    /**
     * 회원가입의 이메일 인증에 관한 메서드
     * @param email 메일을 보낼 아이디(이메일)
     * @return 인증번호
     * @throws Exception
     */
    @PostMapping("/mail-auth")
    public String test(@RequestBody Map<String, String> email) throws Exception {
        StringBuffer key = new StringBuffer();  // 인증번호 저장용
        Random random = new Random();           // 인증번호 생성용

        // 인증번호 생성
        for (int i = 0; i < 6; i++) {
            key.append(random.nextInt(10));
        }

        // 메일 전송
        emailService.sendMessage(email.get("email"), key.toString());

        return key.toString();
    }

}
