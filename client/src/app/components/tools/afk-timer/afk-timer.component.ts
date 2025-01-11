import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afk-timer',
  templateUrl: './afk-timer.component.html',
  styleUrls: ['./afk-timer.component.css']
})
export class AfkTimerComponent  {
  bgColor: string = 'green';
  inputSeconds: number = 0; // Input time in seconds
  intervalId: any; // Timer interval ID
  isStarted: boolean = false; // Tracks if the timer is started
  elapsedTime: number = 0; // Elapsed time
  showContinueReset: boolean = false; // Tracks whether to show Continue/Reset buttons

  startTimer(): void {
    if (!this.inputSeconds || this.inputSeconds <= 0) {
      alert('Please enter a valid number of seconds.');
      return;
    }
    this.isStarted = true;
    this.elapsedTime = 0;
    this.intervalId = setInterval(() => {
      this.elapsedTime++;
      if (this.elapsedTime >= this.inputSeconds) {
        this.makeNoise();
        this.stopTimer(true); // Stop and show Continue/Reset buttons
      }
    }, 1000);
  }

  stopTimer(showButtons: boolean = false): void {
    clearInterval(this.intervalId);
    this.isStarted = false;
    if (showButtons) {
      this.showContinueReset = true;
    }
  }

  continueTimer(): void {
    this.bgColor = 'green';
    this.elapsedTime = 0;
    this.showContinueReset = false;
    this.startTimer();
    
  }

  resetPage(): void {
    location.reload(); // Refresh the page
  }

  async makeNoise() {
    // console.log()
    const audio = new Audio('assets/ding-101492.mp3'); 
    audio.play().then(() => {
      console.log('Audio played successfully')
      this.bgColor = 'red';
    })
    .catch((error) => console.error('Error playing audio:', error));
  }

}
