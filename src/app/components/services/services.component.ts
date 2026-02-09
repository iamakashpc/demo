import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    services = [
        {
            title: 'CCTV Surveillance',
            description: 'Advanced surveillance solutions with HD clarity, night vision, and remote access to keep your premises secure 24/7.',
            icon: 'videocam',
            image: 'service-cctv.jpg'
        },
        {
            title: 'Networking Solutions',
            description: 'Robust and scalable network infrastructure setup, including structured cabling, Wi-Fi optimization, and server management.',
            icon: 'router',
            image: 'service-networking.jpg'
        },
        {
            title: 'Biometric Systems',
            description: 'Modern access control and time-attendance systems using fingerprint, face recognition, and card-based technologies.',
            icon: 'fingerprint',
            image: 'service-biometric.jpg'
        },
        {
            title: 'EPABX Intercom',
            description: 'Reliable communication systems for seamless internal and external connectivity within offices and residential complexes.',
            icon: 'phone_in_talk',
            image: 'service-epabx.jpg'
        },
        {
            title: 'Automation Systems',
            description: 'Smart home and office automation for lighting, climate, and security control at your fingertips.',
            icon: 'settings_remote',
            image: 'service-automation.jpg'
        }
    ];
}
