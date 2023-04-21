package com.kjw.my2.domain.forPaging;


import lombok.Data;

@Data
public class SearchCri extends Criteria {

    private String keyword;     // 검색 키워드
    private String type;        // 검색 타입(컬럼)

}
