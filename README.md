# OttWatch Mobile

A React Native mobile app built with Expo for civic transparency and municipal information in Ottawa.

## Overview

OttWatch Mobile provides native iOS and Android access to Ottawa's municipal data including:

- **Development Applications**: Building permits and planning processes
- **Municipal Meetings**: City council and committee schedules with agendas
- **Lobbying Activities**: Registered lobbying activities and corporate influence
- **Real-time Updates**: Push notifications for civic announcements

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI (installed automatically)
- iOS Simulator (for iOS development) or Android Studio (for Android development)
- Physical device with Expo Go app for testing

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

This will start the Expo development server and display a QR code in your terminal.

### 3. To Test the App

1. **Install Expo Go** on your phone from App Store/Play Store
2. **Start development server**: `npm start` (already running)
3. **Scan QR code** from your terminal with Expo Go app
4. **The app will load** with native navigation and screens

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start development server and open Android emulator
- `npm run ios` - Start development server and open iOS simulator  
- `npm run web` - Start development server for web

## Project Structure

```
src/
├── screens/          # Main app screens
│   ├── HomeScreen.tsx
│   ├── DevAppsScreen.tsx
│   ├── MeetingsScreen.tsx
│   └── LobbyingScreen.tsx
├── navigation/       # Navigation configuration
│   └── TabNavigator.tsx
├── components/       # Reusable UI components
├── services/         # API calls and data fetching
├── constants/        # App constants and themes
├── types/           # TypeScript type definitions
└── utils/           # Helper functions
```

## Backend Integration

This mobile app connects to the OttWatch Rails API at `https://ottwatch.ca`. The Rails backend provides:

- Development applications data
- Municipal meeting schedules
- Lobbying registry information
- Real-time announcements

## Development Workflow

### Adding New Features

1. Create screen components in `src/screens/`
2. Add navigation routes in `src/navigation/TabNavigator.tsx`
3. Create API service functions in `src/services/`
4. Add TypeScript types in `src/types/`

### API Integration

The app will connect to the Rails backend using standard HTTP requests:

```typescript
// Example API call
const response = await fetch('https://ottwatch.ca/api/devapps');
const devApps = await response.json();
```

## Building for Production

### Development Build
```bash
npx expo build
```

### Production Build with EAS
```bash
npx eas build --platform all
```

## Deployment

The app uses Expo's managed workflow with EAS (Expo Application Services) for:

- **Cloud builds** for iOS and Android
- **Over-the-air updates** for instant app updates
- **Push notifications** for civic announcements

## Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform and toolchain
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **Expo Vector Icons** - Icon library

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Related Repositories

- [OttWatch Rails Backend](https://github.com/kevinodotnet/ottwatch) - The main Rails application providing the API

## License

This project is part of the OttWatch civic transparency initiative for Ottawa.