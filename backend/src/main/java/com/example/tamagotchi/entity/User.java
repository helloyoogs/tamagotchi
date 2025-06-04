package com.example.tamagotchi.entity;

import lombok.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

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

	@NotBlank(message = "이메일은 필수입니다.")
	@Email(message = "유효한 이메일 형식이어야 합니다.")
	@Column(unique = true, nullable = false)
	private String email;

	@NotBlank(message = "비밀번호는 필수입니다.")
	@Size(min = 8, max = 20, message = "비밀번호는 8자 이상 20자 이하로 입력해주세요.")
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d\\W]{8,}$", message = "비밀번호는 영문자와 숫자를 포함해야 합니다.")
	private String password;

	@NotBlank(message = "닉네임은 필수입니다.")
	@Size(min = 2, max = 10, message = "닉네임은 2~10자여야 합니다.")
	@Pattern(regexp = "^[\\p{L}\\p{N}_]{2,10}$", message = "닉네임은 문자, 숫자, 밑줄(_)만 사용 가능하며 특수문자/공백은 안 됩니다.")
	@Column(unique = true)
	private String nickname;
}