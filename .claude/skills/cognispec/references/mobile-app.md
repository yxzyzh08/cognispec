---
name: mobile-app
description: Template for mobile applications (iOS, Android, cross-platform)
focus_areas:
  - UI/UX design patterns
  - Platform support (iOS, Android)
  - Offline capability and sync
  - Device compatibility
  - App store requirements
---

# Template: Mobile Application

This template is optimized for mobile applications including:
- Native iOS apps (Swift, SwiftUI)
- Native Android apps (Kotlin, Jetpack Compose)
- Cross-platform apps (React Native, Flutter, Expo)
- Progressive Web Apps (PWA) with mobile focus
- Hybrid apps (Capacitor, Cordova)

---

## Overview Additions

Add these sections to `overview.md` after "Solution Overview":

### Platform Strategy

```markdown
---

## Platform Strategy

### Target Platforms

| Platform | Priority | Framework | Min Version |
|----------|----------|-----------|-------------|
| iOS | Primary | [Swift/React Native/Flutter] | iOS [version] |
| Android | Primary | [Kotlin/React Native/Flutter] | Android [version] (API [level]) |

### Development Approach

- [ ] Native (separate codebases)
- [ ] Cross-platform (shared codebase)
- [ ] Hybrid (web + native shell)

### Platform Parity

| Feature | iOS | Android | Notes |
|---------|-----|---------|-------|
| [Feature 1] | ✓ | ✓ | Full parity |
| [Feature 2] | ✓ | Phase 2 | iOS first |
| [Feature 3] | ✓ | ✓ | Platform-specific UI |

<details>
<summary>📖 Platform Decision Rationale</summary>

[Explain the platform strategy decisions:
- Why these platforms were chosen
- Why this development approach
- Timeline considerations
- Team expertise factors]

</details>
```

### Device Support Matrix

```markdown
---

## Device Support Matrix

### Supported Devices

| Category | Devices | Screen Sizes |
|----------|---------|--------------|
| Phones | iPhone SE - iPhone 15 Pro Max | 4.7" - 6.7" |
| Phones | Android mid-range to flagship | 5.5" - 6.8" |
| Tablets | iPad (optional) | 10.2" - 12.9" |

### Screen Adaptation

| Breakpoint | Type | Layout |
|------------|------|--------|
| < 380px | Small phone | Compact |
| 380-428px | Standard phone | Default |
| > 428px | Large phone/tablet | Extended |

<details>
<summary>📖 Device Testing Matrix</summary>

[Specific devices for testing:
- iPhone models (SE, standard, Pro, Pro Max)
- Android devices (various manufacturers)
- Tablets (if supported)]

</details>
```

---

## Requirements Additions

Add these sections to `requirements.md` after "Functional Requirements":

### Screen Flows

```markdown
---

## Screen Flows

### Main Navigation

```
┌─────────────────────────────────────┐
│              App Entry              │
├─────────────────────────────────────┤
│  Splash → Onboarding → Home/Login   │
└─────────────────────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    ↓             ↓             ↓
┌───────┐   ┌───────┐   ┌───────────┐
│ Tab 1 │   │ Tab 2 │   │ Tab 3     │
│[Name] │   │[Name] │   │[Name]     │
└───────┘   └───────┘   └───────────┘
```

### Screen Inventory

| Screen | Purpose | Entry Points | Key Actions |
|--------|---------|--------------|-------------|
| Splash | App loading | App launch | Auto-navigate |
| Onboarding | First-time setup | Fresh install | Complete/Skip |
| Home | Main content | Tab bar | [Actions] |
| [Screen] | [Purpose] | [Entry] | [Actions] |

<details>
<summary>📖 Detailed Screen Specifications</summary>

[For each screen:
- Wireframe description
- UI components
- State variations
- Transitions]

</details>
```

### Platform-Specific Requirements

```markdown
---

## Platform-Specific Requirements

### iOS-Specific

| Requirement | Description | Priority |
|-------------|-------------|----------|
| iOS-001 | Support Dynamic Type for accessibility | Must Have |
| iOS-002 | Implement haptic feedback | Should Have |
| iOS-003 | Support Dark Mode | Must Have |
| iOS-004 | Widget support | Could Have |

### Android-Specific

| Requirement | Description | Priority |
|-------------|-------------|----------|
| AND-001 | Material Design 3 compliance | Must Have |
| AND-002 | Back button handling | Must Have |
| AND-003 | Support multiple screen densities | Must Have |
| AND-004 | Home screen widget | Could Have |

<details>
<summary>📖 Platform Guidelines References</summary>

- iOS: [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- Android: [Material Design](https://m3.material.io/)

</details>
```

### Offline Requirements

```markdown
---

## Offline Requirements

### Offline Capability Matrix

| Feature | Offline Support | Sync Strategy |
|---------|-----------------|---------------|
| [Feature 1] | Full | Background sync |
| [Feature 2] | Read-only | On-demand |
| [Feature 3] | None | Online required |

### Data Sync Strategy

| Data Type | Storage | Sync Frequency | Conflict Resolution |
|-----------|---------|----------------|---------------------|
| User data | SQLite/Realm | Real-time | Server wins |
| Content | Cache | Daily | Client wins |
| Media | File system | On-demand | Skip |

<details>
<summary>📖 Offline Architecture Details</summary>

[Detailed offline strategy:
- Local storage approach
- Sync queue implementation
- Conflict resolution rules
- Network status handling]

</details>
```

---

## Appendix Additions

Add these sections to `appendix.md` after "Technical Constraints":

### Screen Flow Diagrams

```markdown
---

## Screen Flow Diagrams

### Complete Navigation Map

```
                    ┌──────────┐
                    │  Launch  │
                    └────┬─────┘
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
        ┌──────────┐          ┌──────────┐
        │Onboarding│          │  Login   │
        └────┬─────┘          └────┬─────┘
             │                     │
             └──────────┬──────────┘
                        ↓
                  ┌──────────┐
                  │   Home   │
                  └────┬─────┘
                       │
         ┌─────────────┼─────────────┐
         ↓             ↓             ↓
    ┌─────────┐  ┌──────────┐  ┌──────────┐
    │ Screen1 │  │ Screen2  │  │ Settings │
    └─────────┘  └──────────┘  └──────────┘
```

### Gesture Interactions

| Gesture | Location | Action |
|---------|----------|--------|
| Swipe left | List item | Delete/Archive |
| Pull down | Lists | Refresh |
| Long press | Content | Context menu |
| Pinch | Images | Zoom |
```

### Platform Implementation Matrix

```markdown
---

## Platform Implementation Matrix

### Feature Implementation by Platform

| Feature | iOS Implementation | Android Implementation |
|---------|-------------------|----------------------|
| Navigation | UINavigationController / NavigationStack | Navigation Component |
| Storage | Core Data / SwiftData | Room / DataStore |
| Networking | URLSession / Alamofire | Retrofit / Ktor |
| Push | APNs | FCM |
| Auth | Sign in with Apple | Google Sign-In |

### Third-Party Libraries

| Purpose | iOS | Android | Cross-platform |
|---------|-----|---------|----------------|
| HTTP | Alamofire | Retrofit | Dio/Axios |
| Images | Kingfisher | Coil | cached_network_image |
| Analytics | Firebase | Firebase | Firebase |
```

### App Store Checklist

```markdown
---

## App Store Checklist

### iOS App Store

- [ ] App Store Connect account setup
- [ ] App ID and Bundle ID configured
- [ ] Provisioning profiles created
- [ ] Screenshots for all device sizes (6.7", 6.5", 5.5")
- [ ] App icon (1024x1024)
- [ ] Privacy policy URL
- [ ] App Review Guidelines compliance
- [ ] In-app purchase configuration (if applicable)
- [ ] App Privacy labels completed

### Google Play Store

- [ ] Google Play Console account setup
- [ ] Package name configured
- [ ] Signing key generated
- [ ] Screenshots (phone, 7" tablet, 10" tablet)
- [ ] Feature graphic (1024x500)
- [ ] App icon (512x512)
- [ ] Privacy policy URL
- [ ] Content rating questionnaire
- [ ] Data safety form completed
- [ ] Target API level compliance

<details>
<summary>📖 Store Listing Content Template</summary>

**App Name**: [name] (30 chars max iOS, 50 chars Android)

**Short Description**: [description] (80 chars)

**Full Description**: [description] (4000 chars)

**Keywords** (iOS): [keyword1], [keyword2], ...

**Category**: [primary category]

**Content Rating**: [rating]

</details>
```

---

## Quality Checklist

Mobile-specific quality checks:

- [ ] UI adapts to all supported screen sizes
- [ ] App works in both portrait and landscape (or explicitly locks orientation)
- [ ] Offline functionality works as specified
- [ ] Push notifications configured correctly
- [ ] Deep linking works for all specified routes
- [ ] Accessibility features implemented (VoiceOver, TalkBack)
- [ ] Performance acceptable on minimum supported devices
- [ ] App size within acceptable limits
- [ ] Battery usage optimized
- [ ] App store requirements met for both platforms
