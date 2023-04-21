package com.kjw.my2.domain.forPaging;


import lombok.Getter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Getter
@ToString
@Slf4j
public class Criteria {

    // 필드 =====
    private int rowsPerPage;    // 검색할 데이터의 수
    private int currentPage;    // 현재의 데이터(페이지)
    private int startNum;       // DB 검색 시 검색시작 인덱스

    // 생성자 =====
    public Criteria() {
        this.rowsPerPage = 10;
        this.currentPage = 1;
    }

    // setter =====

    /**
     * 현재의 데이터를 위한 setter
     * @param currentPage 현재 데이터(페이지)
     */
    public void setCurrentPage(int currentPage) {
        if (currentPage > 1) {
            this.currentPage = currentPage;
        } else {
            this.currentPage = 1;
        }
    }

    /**
     * 넘겨줄 데이터의 갯수를 정의하기 위한 setter
     * @param rowsPerPage 넘겨줄 데이터의 갯수
     */
    public void setRowsPerPage(int rowsPerPage) {
        if (rowsPerPage > 5 && rowsPerPage < 50) {
            this.rowsPerPage = rowsPerPage;
        } else {
            this.rowsPerPage = 10;
        }
    }

    /**
     * DB 검색을 위한 시작 인덱스 setter
     */
    public void setStartNum() {
        if (this.startNum < 1) this.startNum = 1;
        this.startNum = (this.currentPage - 1) * this.rowsPerPage;
    }

}
