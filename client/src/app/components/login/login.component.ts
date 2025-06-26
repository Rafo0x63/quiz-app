import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms"
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
	loginForm: any
	loading: boolean = false
	errorMessage: string = ''
	successMessage: string = ''
	email: any = ''
	password: any = ''

	constructor(private fb: FormBuilder, private authService: AuthService) {}

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
	}
	

	onSubmit() {
		if (this.loginForm.invalid) return
		
		this.loading = true
		this.errorMessage = ''
		this.successMessage = ''

		const { email, password } = this.loginForm.value

		this.authService.login(email, password).subscribe({
			next: (res) => {
				this.successMessage = res.message || 'Login successful'
				this.loading = false
			},
			error: (err) => {
				this.errorMessage = err.error?.error || "Login failed"
				this.loading = false
			}
		})
	}
}
