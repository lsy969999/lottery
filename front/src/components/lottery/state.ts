/** 게임 상태 */
export enum GameState {
    /** 1. 케이스에 공 주입 */
    BALL_INJECT,
    /** 2. 볼 인젝터 제거 */
    INJECTOR_REMOVE,
    /** 3. 볼 인젝터 캡 막기 */
    INJECTOR_CAP_SET,
    /** 4. 1차 믹서 가동 */
    MIXER_1_START,
    /** 5. 1차 믹서 가동 중단 */
    MIXER_1_STOP,
    /** 6. 2차 믹서 가동 */
    MIXER_2_START,
    
    /** 7. 1차 케이스 캡 제거 */
    CASE_CAP_1_AWAY,
    /** 8. 1차 당첨볼 캐쳐에 캐치 */
    WINNING_BALL_1_CATCH,
    /** 9. 1차 케이스캡 막기 */
    CASE_CAP_1_SET,
    /** 10. 1차 캐쳐 회전 */
    CATCHER_1_ROTATE,
    
    /** 11. 2차 케이스 캡 제거 */
    CASE_CAP_2_AWAY,
    /** 12. 2차 당첨볼 캐쳐에 캐치 */
    WINNING_BALL_2_CATCH,
    /** 13. 2차 케이스캡 막기 */
    CASE_CAP_2_SET,
    /** 14. 2차 캐쳐 회전 */
    CATCHER_2_ROTATE,
    /** 15. 1차 당첨볼 놓아주기 */
    WINNING_BALL_1_FREE,

    /** 16. 3차 케이스 캡 제거 */
    CASE_CAP_3_AWAY,
    /** 17. 3차 당첨볼 캐쳐에 캐치 */
    WINNING_BALL_3_CATCH,
    /** 18. 3차 케이스캡 막기 */
    CASE_CAP_3_SET,
    /** 19. 3차 캐쳐 회전 */
    CATCHER_3_ROTATE,
    /** 20. 2차 당첨볼 놓아주기 */
    WINNING_BALL_2_FREE,

    /** 21. 4차 케이스 캡 제거 */
    CASE_CAP_4_AWAY,
    /** 22. 4차 당첨볼 캐쳐에 캐치 */
    WINNING_BALL_4_CATCH,
    /** 23. 4차 케이스캡 막기 */
    CASE_CAP_4_SET,
    /** 24. 4차 캐쳐 회전 */
    CATCHER_4_ROTATE,
    /** 25. 3차 당첨볼 놓아주기 */
    WINNING_BALL_3_FREE,

    /** 26. 5차 케이스 캡 제거 */
    CASE_CAP_5_AWAY,
    /** 27. 5차 당첨볼 캐쳐에 캐치 */
    WINNING_BALL_5_CATCH,
    /** 28. 5차 케이스캡 막기 */
    CASE_CAP_5_SET,
    /** 29. 5차 캐쳐 회전 */
    CATCHER_5_ROTATE,
    /** 30. 4차 당첨볼 놓아주기 */
    WINNING_BALL_4_FREE,

    /** 31. 6차 케이스 캡 제거 */
    CASE_CAP_6_AWAY,
    /** 32. 6차 당첨볼 캐쳐에 캐치 */
    WINNING_BALL_6_CATCH,
    /** 33. 6차 케이스캡 막기 */
    CASE_CAP_6_SET,
    /** 34. 6차 캐쳐 회전 */
    CATCHER_6_ROTATE,
    /** 35. 5차 당첨볼 놓아주기 */
    WINNING_BALL_5_FREE,

    /** 36. 7차 케이스 캡 제거 */
    CASE_CAP_7_AWAY,
    /** 37. 7차(2등) 당첨볼 캐쳐에 캐치 */
    WINNING_BALL_7_CATCH,
    /** 38. 7차 케이스캡 막기 */
    CASE_CAP_7_SET,
    /** 39. 7차 캐쳐 회전 */
    CATCHER_7_ROTATE,
    /** 40. 6차 당첨볼 놓아주기 */
    WINNING_BALL_6_FREE,

    /** 41. 8차 캐쳐 회전 */
    CATCHER_8_ROTATE,
    /** 42. 2차 믹서 가동 중단 */
    MIXER_2_STOP,
    /** 43. 7차(2등) 당첨볼 놓아주기 */
    WINNING_BALL_7_FREE,
    
    /** 44. 결과 렌더링 */
    RESULT_RENDERING
}