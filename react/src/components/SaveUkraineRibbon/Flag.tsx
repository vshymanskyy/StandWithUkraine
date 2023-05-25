import * as React from "react";

"data:image/svg+xml,%3Csvg class='flag' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23005BBB'/%3E%3Crect width='1200' height='400' y='400' fill='%23FFD500'/%3E%3C/svg%3E"

export default function Flag(props: {}) {
  return <svg height="100%" width="100%" viewBox="0 0 2 2" preserveAspectRatio="none">
  <rect x="0" y="0" width="2" height="2" fill="#005BBB"/>
  <rect x="0" y="1" width="2" height="1" fill="#FFD500"/>
  </svg>
}

// 35, 213, 255