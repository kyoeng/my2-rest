package com.kjw.my2.controller;


import com.kjw.my2.domain.UserVO;
import com.kjw.my2.service.EmailService;
import com.kjw.my2.service.UserService;
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
    private final UserService userService;

    // 메서드 (로그인 필요 X) =====
    /**
     * 회원가입의 이메일 인증에 관한 메서드
     * @param email 메일을 보낼 아이디(이메일)
     * @return 인증번호
     * @throws Exception
     */
    @PostMapping("/mail-auth")
    public String emailAuth(@RequestBody Map<String, String> email) throws Exception {
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

    /**
     * ID 중복확인을 위한 메서드
     * @param vo UserVO
     * @return boolean
     */
    @GetMapping("/id-check")
    public boolean idCheck(@RequestParam("id") String id) {
        // 0이면 중복되는 ID가 없는 경우임 (정상 사용가능)
        if (userService.idCheck(id) < 1) {
            return true;

        // 1이면 중복되는 ID가 존재함 (사용 불가)
        } else {
            return false;
        }
    }

    /**
     * 회원가입에 대한 메서드
     * @param vo UserVO
     * @return boolean
     */
    @PostMapping("/join")
    public boolean join(@RequestBody UserVO vo) {
        // 회원가입 성공
        if (userService.join(vo) > 0) {
            return true;

        // 회원가입 실패
        } else {
            return false;
        }
    }

}
