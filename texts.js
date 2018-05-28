module.exports = [
    {
        text: [
            'управление регистрацией абонентов.',
            'чтобы зарегистрировать абонента нажмите 1,',
            'чтобы отрегистрировать абонента нажмите 0,', 
            'чтобы зарегистрироваться в очередях обслуживания нажмите 5',
            'чтобы отрегистрироваться из очередей обслуживания нажмите 6'
            ].join(' '), 
        file: 'sounds/hello.mp3'
    },
    {
        text: 'неверный пинкод', 
        file: 'sounds/badpin.mp3'
    },
    {
        text: 'введите пинкод', 
        file: 'sounds/inputpincode.mp3'
    },
    {
        text: 'вы не являетесь зарегистрированным абонентом', 
        file: 'sounds/you_are_not_registered_user.mp3'
    },
    {
        text: 'вы уже зарегистрированы как абонент', 
        file: 'sounds/you_already_registred_user.mp3'
    },
    {
        text: 'абонент уже зарегистрирован', 
        file: 'sounds/operator_already_registred.mp3'
    },
    {
        text: 'Ошибка, телефон принадлежит другому абоненту',
        file: 'sounds/phone_has_link_to_other_user.mp3'
    },
    {
        text: 'абонент отрегистрирован', 
        file: 'sounds/user_unregistrated.mp3'
    },
    {
        text: 'абонент зарегистрирован', 
        file: 'sounds/user_registrated.mp3'
    },
    {
        text: 'абонент не состоит ни в одной очереди', 
        file: 'sounds/user_not_in_queues.mp3'
    },
    {
        text: 'абонент добавлен в очереди', 
        file: 'sounds/user_add_in_queues.mp3'
    },
    {
        text: 'абонент с этим пин-кодом уже зарегистрирован', 
        file: 'sounds/user_already_registred.mp3'
    },
    {
        text: 'на этот телефоне уже есть зарегистрированный абонент', 
        file: 'sounds/user_already_registred_on_this_peer.mp3'
    },
    {
        text: 'абонент зарегистрирован, в том числе и в очередях', 
        file: 'sounds/user_registrated_in_queues.mp3'
    },
    {
        text: 'абонент удален из очередей', 
        file: 'sounds/user_removed_from_queues.mp3'
    },
    {
        text: 'на этот телефоне нет зарегистрированного абонента', 
        file: 'sounds/user_not_registered_on_this_peer.mp3'
    },
    {
        text: 'Вы не можете быть удалены из очередей, потому что вы в них не состоите',
        file: 'sounds/user_cannot_be_removed_from_queues.mp3'
    },
];