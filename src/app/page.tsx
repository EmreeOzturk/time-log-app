import LogAdd from "@/components/log-add";
import LogCalendar from "@/components/log-calendar";
import LogTable from "@/components/log-table";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()
  if (!data?.session) {
    return redirect("/auth")
  }
  return (
    <>
      <LogAdd />
      <LogCalendar />
      <LogTable />
    </>
  )
}
