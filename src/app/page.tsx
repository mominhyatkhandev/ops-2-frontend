import Header from '@/components/Content/HeroBanner/HeroBanner';
import Info from '@/components/Content/Info/Info';
import OnlinePayments from '@/components/Content/OnlinePayments/OnlinePayments';
import QRPayments from '@/components/Content/QRPayments/QRPayments';
import PaymentLink from '@/components/Content/Paymentlink/PaymentLink';
import MiniApps from '@/components/Content/MiniApps/MiniApps';
import { cards } from '@/utils/data';

export default function Home() {
  return (
    <main>
      <Header />
      <Info cardsArray={cards} />
      <div className="flex flex-col gap-5 pb-[93px]">
        <OnlinePayments />
        <QRPayments />
        <MiniApps />
        <PaymentLink />
      </div>
    </main>
  );
}
