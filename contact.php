<?php
//获取请求者ip
$ip = $_SERVER['REMOTE_ADDR'];
//数据库连接
$dbConnection = new \mysqli('localhost', 'root', 'Aidong2014!@#', 'blog', '3306');
$stmt = $dbConnection->prepare('select * from fan_contact_us where ip = ? order by id desc limit 1');
$stmt->bind_param('s', $ip);
$stmt->execute();
$result = $stmt->get_result()->fetch_assoc();
//获取现在的timestamp值
$today = strtotime('now');
$todayString = date('Y-m-d H:i:s',$today);

//同一ip一天只能留言一次
if (empty($result) || $today - strtotime($result['created_at']) > 86400) {
    //如果无留言记录或者同一ip留言超过一天，直接插入
    $name = $_GET['name'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $content = $_GET['content'];
    $stmt->prepare('insert into fan_contact_us (email,name,phone,content,ip,created_at) VALUES (?,?,?,?,?,?)');
    $stmt->bind_param('ssssss',$email,$name,$phone,$content,$ip,$todayString);
    $isSuccess = $stmt->execute();
    if($isSuccess){
        //成功
        print_r(['status'=>200,'message'=>'留言成功，谢谢支持！']);
        return;
    }
    //插入数据库失败
    print_r(['status'=>201,'message'=>'留言失败，请稍后重试']);
    return;
}
$dbConnection->close();
//一天内重复留言
print_r(['status'=>202,'message'=>'您于'.$result['created_at'].'留过言，请一天后再试']);
