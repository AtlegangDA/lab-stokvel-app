import PageHeading from "../components/PageHeading";
import SecondaryButton from "../components/SecondaryButton";

function Auth() {
  return (
    <SecondaryButton type="button">Connect Wallet</SecondaryButton>
  )
}

export default function AdminPage() {
  return (
    <div className="flex flex-col items-stretch max-w-4xl gap-8 m-auto">
      <PageHeading>Admin</PageHeading>

      <Auth />
    </div>
  )
}