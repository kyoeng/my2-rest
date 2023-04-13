package com.kjw.my2.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Slf4j
@Service
@PropertySource("classpath:application.properties")
@RequiredArgsConstructor
public class EmailService {

    // 필드 =====
    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String id;


    // 메서드 =====
    /**
     * 인증 메일 생성
     * @param toUser 메일을 보낼 아이디
     * @param authNum 인증번호
     * @return 인증관련 메일의 내용
     * @throws MessagingException
     * @throws UnsupportedEncodingException
     */
    public MimeMessage createMessage(String toUser, String authNum) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.addRecipients(MimeMessage.RecipientType.TO, toUser);
        message.setSubject("MY2 회원가입 인증 코드");

        // 메일 내용 (HTML 문법 사용)
        String msg = "";
        msg += "<h1 style=\"font-size: 30px; padding: 0 30px;\">Email 인증하기</h1>";
        msg += "<p style=\"font-size: 16px; padding: 0 30px;\">아래의 코드를 회원가입 화면에 입력 후 인증해주세요.</p>";
        msg += "<div style=\"font-size: 16px; padding: 30px; color: red;\">" + authNum + "</div>";

        message.setText(msg, "utf-8", "html");
        message.setFrom(new InternetAddress(id, "Admin"));

        return message;
    }

    /**
     * 인증 메일 발송
     * @param toUser 메일을 보낼 아이디
     * @param authNum 인증번호
     * @throws Exception
     */
    public void sendMessage(String toUser, String authNum) throws Exception {
        MimeMessage message = createMessage(toUser, authNum);

        try {
            javaMailSender.send(message);
        } catch (MailException es) {
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
    }
}
