-- 유저 테이블
CREATE TABLE user
(
    id         BIGINT AUTO_INCREMENT PRIMARY KEY,
    email      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL,
    nickname   VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 다마고치 테이블
CREATE TABLE tamagotchi
(
    id             BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id        BIGINT       NOT NULL,
    name           VARCHAR(100) NOT NULL,
    level          INT      DEFAULT 1,
    status         VARCHAR(50), -- ex: happy, hungry 등
    status_hunger  INT      DEFAULT 0,
    status_sleepy  INT      DEFAULT 0,
    status_boredom INT      DEFAULT 0,
    is_alive       BOOLEAN  DEFAULT TRUE,
    created_at     DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at     DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_tamagotchi_user FOREIGN KEY (user_id)
        REFERENCES user (id)
        ON DELETE CASCADE
);

-- 액션 로그 테이블
CREATE TABLE action_log
(
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    tamagotchi_id BIGINT      NOT NULL,
    type          VARCHAR(20) NOT NULL, -- EAT, SLEEP, PLAY 등
    amount        INT         NOT NULL,
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_actionlog_tamagotchi FOREIGN KEY (tamagotchi_id)
        REFERENCES tamagotchi (id)
        ON DELETE CASCADE
);
