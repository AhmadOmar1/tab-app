export interface Route {
    path: string;
    element: React.ReactElement;
    requireAuth: boolean;
    requireAdmin: boolean;
    children?:Route[];
  }
  