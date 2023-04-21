package com.kjw.my2.domain.forPaging;


import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class PageMaker {

    // 필드 =====
    private int totalDataCount;             // DB에 있는 데이터의 총 갯수
    private int startPageNum;               // 계산 ( 페이징에 보여질 시작 번호 )
    private int endPageNum;                 // 계산 ( 페이징에 보여질 마지막 번호 )
    private int lastPageNum;                // 계산 ( 출력 가능한 페이징 번호 )
    private final int DISPLAYPAGING = 5;    // 한 페이징당 표시할 갯수

    private boolean prev;                   // 이전 페이징 표시에 대한 boolean 값
    private boolean next;                   // 다음 페이징 표시에 대한 boolean 값

    Criteria criteria;                      // Criteria 객체 필드


    // setter =====

    /**
     * Criteria 필드의 setter
     * @param criteria 검색의 기준 객체 (Criteria)
     */
    public void setCriteria(Criteria criteria) {
        this.criteria = criteria;
    }

    /**
     * 데이터의 총 갯수에 대한 setter, 페이징 계산
     * @param totalDataCount 총 데이터의 갯수
     */
    public void setTotalDataCount(int totalDataCount) {
        this.totalDataCount = totalDataCount;
        calcPaging();
    }

    /**
     * 페이징 View처리에 필요한 필드에 대한 계산식
     */
    public void calcPaging() {
        this.endPageNum = (int) Math.ceil(criteria.getCurrentPage() / (double) this.DISPLAYPAGING) * this.DISPLAYPAGING;
        this.startPageNum = (this.endPageNum - this.DISPLAYPAGING) + 1;

        this.lastPageNum = (int) Math.ceil(this.totalDataCount / (double) criteria.getRowsPerPage());
        if (endPageNum > lastPageNum) this.endPageNum = this.lastPageNum;

        this.prev = this.startPageNum != 1;
        this.next = this.endPageNum != this.lastPageNum;
    }
}
