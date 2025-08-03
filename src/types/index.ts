export interface DevApp {
  id: string;
  address: string;
  status: string;
  application_type: string;
  created_at: string;
  updated_at: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  committee: string;
  agenda_url?: string;
}

export interface LobbyingActivity {
  id: string;
  registrant: string;
  client: string;
  subject_matter: string;
  created_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  created_at: string;
  announceable_type: string;
}