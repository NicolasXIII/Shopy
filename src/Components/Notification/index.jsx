const Notification = () => {

    return (

        <div className={`flex justify-center items-center rounded-lg z-10 fixed inset-0 transform -translate-y-1/4`}>
            <h3 className={`p-3 rounded-lg text-white bg-zinc-900 text-xl`}>
                Item has been added to the cart ✅
            </h3>
        </div >
    );
}

export default Notification;



