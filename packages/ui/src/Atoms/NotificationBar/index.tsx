interface INotificationBar {
  message?: string
}

export const NotificationBar = ({ message }: INotificationBar) => {
  return (
    <>
      <div className="h-12 bg-emerald-600 text-white px-4 flex items-center justify-center text-center text-sm md:text-base ">
        {message}
      </div>
    </>
  )
}
