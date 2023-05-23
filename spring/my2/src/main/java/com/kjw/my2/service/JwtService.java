package com.kjw.my2.service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Slf4j
@Service
public class JwtService {

    // 필드 =====
    private static final String SECRET_KEY = "qegubaodgqeigfhaldigh1sxfb35246njkbhv234luibubhbqli13509sdginhwlekadfnviwieiUEGNef890IHFEHn13neifnieinING";

    // 메서드 =====
    /**
     * JWT 토큰 발급
     * @param subject 아이디
     * @param expTime 만료시간
     * @return JWT
     */
    public String createToken(String subject, String role, long expTime) {
        if (expTime <= 0) throw new RuntimeException("토큰의 만료시간은 0보다 커야 합니다.");

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secretKeyBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
        Key signingKey = new SecretKeySpec(secretKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()
                .setSubject(subject)
                .setAudience(role)
                .signWith(signingKey, signatureAlgorithm)
                .setExpiration(new Date(System.currentTimeMillis() + expTime))
                .compact();
    }

    /**
     * 토큰의 정보 추출용 메서드
     * @param token JWT
     * @return id, role 정보
     */
    public Map<String, String> getTokenInfo(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
                .build()
                .parseClaimsJws(token)
                .getBody();

        Map<String, String> result = new HashMap<>();

        result.put("id", claims.getSubject());
        result.put("role", claims.getAudience());

        return result;
    }

    /**
     * 토큰의 유효시간 검증용 메서드
     * @param token JWT
     * @return 유효 시 true, 유효하지 않을 시 false
     */
    public boolean validToken(String token) {
        if (token == null || token.equals("undefined")) return false;

        try {
            Jwts.parserBuilder()
                    .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            return true;
        } catch (Exception e) {
            log.info("Token Valid Error" + e.toString());
        }

        return false;
    }

}
