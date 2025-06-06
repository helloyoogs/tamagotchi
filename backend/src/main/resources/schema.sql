-- ✅ User 테이블
CREATE TABLE `User` (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nickname VARCHAR(100) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ✅ Tamagotchi 테이블
CREATE TABLE Tamagotchi (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  name VARCHAR(100) NOT NULL,
  level INT DEFAULT 1,
  status ENUM('normal', 'happy', 'very-happy', 'sad', 'sleepy', 'hungry', 'sick', 'dirty') DEFAULT 'normal',
  status_hunger INT DEFAULT 100,
  status_sleepy INT DEFAULT 100,
  status_boredom INT DEFAULT 100,
  is_alive BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES `User`(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ✅ Gift 테이블
CREATE TABLE Gift (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  tamagotchi_id BIGINT NOT NULL,
  name VARCHAR(100) NOT NULL,
  emoji VARCHAR(10) NOT NULL,
  received_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tamagotchi_id) REFERENCES Tamagotchi(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ✅ ActionLog 테이블
CREATE TABLE ActionLog (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  tamagotchi_id BIGINT NOT NULL,
  type ENUM('EAT', 'SLEEP', 'PLAY', 'AUTO_DECAY', 'CLEAN', 'TREAT', 'GIFT', 'SHOWER') NOT NULL,
  amount INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tamagotchi_id) REFERENCES Tamagotchi(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
