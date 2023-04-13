package com.kjw.my2.service;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;


@Slf4j
@Service
public class JwtService {

    private static final String SECRET_KEY = "qegubaodgqeigfhaldigh1sxfb35246njkbhv234luibubhbqli13509sdginhwlekadfnviwieiUEGNef890IHFEHn13neifnieinING";

    /**
     * JWT 토큰 발급
     * @param subject 아이디
     * @param expTime 만료시간
     * @return JWT
     */
    public String createToken(String subject, long expTime) {
        if (expTime <= 0) throw new RuntimeException("토큰의 만료시간은 0보다 커야 합니다.");

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secretKeyBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
        Key signingKey = new SecretKeySpec(secretKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()
                .setSubject(subject)
                .signWith(signingKey, signatureAlgorithm)
                .setExpiration(new Date(System.currentTimeMillis() + expTime))
                .compact();
    }

}
