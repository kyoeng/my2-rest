package com.kjw.my2.controller;


import com.kjw.my2.domain.UserVO;
import com.kjw.my2.service.EmailService;
import com.kjw.my2.service.FileService;
import com.kjw.my2.service.JwtService;
import com.kjw.my2.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserController {

    // 필드 =====
    private final EmailService emailService;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final FileService fileService;


    /**
     * React 서버에서 로그인 유지를 위한 체크 메서드
     * @param request HttpServletRequest
     * @return boolean
     */
    @GetMapping("/check")
    public boolean check(HttpServletRequest request) {
        if (jwtService.validToken(request.getHeader(HttpHeaders.AUTHORIZATION).substring(7))) {
            return true;
        } else {
            return false;
        }
    }

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
     * @param id id
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
        // 패스워드 암호화
        vo.setPassword(passwordEncoder.encode(vo.getPassword()));

        // 회원가입 성공
        if (userService.join(vo) > 0) {
            return true;

        // 회원가입 실패
        } else {
            return false;
        }
    }

    /**
     * 로그인을 위한 메서드
     * @param vo UserVO
     * @return 성공 시 JWT, UserImage, 실패 시 null
     */
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody UserVO vo) {
        String pw = vo.getPassword();
        vo = userService.login(vo);

        if (vo != null) {
            if (passwordEncoder.matches(pw, vo.getPassword())) {
                Map<String, String> result = new HashMap<>();
                result.put("token", jwtService.createToken(vo.getUserId(), vo.getUserRole(), (30 * 60 * 1000)));
                result.put("image", vo.getUserImage());
                return result;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }


    // 메서드 (로그인 필요) =====
    /**
     * 마이페이지의 내 정보를 위한 메서드
     * @param id UserVO
     * @return UserVO
     */
    @GetMapping("/auth/get-info")
    public UserVO getInfo(@RequestParam("userId") String id) {
        UserVO vo = userService.getInfo(id);

        if (vo != null) {
            vo.setPassword(null);
            return vo;
        } else {
            return null;
        }
    }


    /**
     * 유저 이미지 변경을 위한 메서드
     * @param vo UserVO
     * @param request HttpServletRequest
     * @return 성공 시 바뀐 이미지 경로, 실패 시 null
     */
    @PutMapping("/auth/ch-img")
    public String changeUserImage(@ModelAttribute UserVO vo, HttpServletRequest request) {
        if (vo.getFile() == null) return null;

        String changeImage = fileService.fileIO(vo.getFile(), request, "userImages", 0, vo.getUserId());

        if (changeImage != null) {
            vo.setUserImage("./images/userImages/" + changeImage);

            if (fileService.userImageChange(vo) > 0) {
                return vo.getUserImage();
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

}
