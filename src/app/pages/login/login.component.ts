import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fm!: FormGroup;

  constructor(private readonly fb: FormBuilder,
              private readonly authService: AuthService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.fm = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }

  submitForm(): void {
    for (const i in this.fm.controls) {
      if (this.fm.controls.hasOwnProperty(i)) {
        this.fm.controls[i].markAsDirty();
        this.fm.controls[i].updateValueAndValidity();
      }
    }

    if (this.fm.invalid) { return; }

    this.authService.login(this.fm.value).subscribe((res) => {
      this.authService.storeTokenInfo(res.token);
      this.authService.storeUserInfo(res.user);
      void this.router.navigate(['/']);
    });
  }
}
