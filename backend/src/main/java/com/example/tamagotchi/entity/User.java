package com.example.tamagotchi.entity;

import lombok.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import static com.example.tamagotchi.constant.UserValidationCode.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    @NotBlank(message = EMAIL_REQUIRED)
    @Email(message = EMAIL_INVALID)
	@Column(unique = true, nullable = false)
	private String email;

    @NotBlank(message = PASSWORD_REQUIRED)
    @Size(min = 8, max = 20, message = PASSWORD_LENGTH_INVALID)
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d\\W]{8,}$", message = PASSWORD_WEAK)
	private String password;

    @NotBlank(message = NICKNAME_REQUIRED)
    @Size(min = 2, max = 10, message = NICKNAME_LENGTH_INVALID)
    @Pattern(regexp = "^[\\p{L}\\p{N}_]{2,10}$", message = NICKNAME_INVALID)
	@Column(unique = true)
	private String nickname;
}