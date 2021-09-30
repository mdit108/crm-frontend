import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/entry.page';
import { Dashboard } from './pages/dashboard/Dashboard.page'
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketList } from './pages/ticket-list/TicketList.page';
import { Ticket } from './pages/tickets/Ticket.page';
function App() {
  return (
    <div>
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <AddTicket></AddTicket> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
