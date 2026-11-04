<?php
// Riceve il form di prenotazione e invia 2 email: notifica al proprietario e conferma al cliente.
// Funziona su hosting condiviso Aruba (mail() con mittente del proprio dominio).
header('Content-Type: application/json; charset=utf-8');

$OWNER = 'Francesco.dezi06@gmail.com';
$host  = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
$FROM  = 'noreply@' . $host;          // deve essere un dominio del tuo hosting; se serve usa una casella reale
$NAME  = 'Agriturismo La Corte di Muggiano';

function out($ok, $msg = '') { echo json_encode(['ok' => $ok, 'message' => $msg]); exit; }
function clean($v, $max) { return mb_substr(trim(preg_replace('/[\r\n]+/', ' ', (string)$v)), 0, $max); }
function h($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }
function itDate($d) { return preg_match('/^(\d{4})-(\d{2})-(\d{2})$/', $d, $m) ? "$m[3]/$m[2]/$m[1]" : $d; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); out(false, 'Metodo non consentito.'); }
$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) out(false, 'Richiesta non valida.');
if (!empty($in['website'])) out(true); // honeypot anti-spam

$first = clean($in['firstName'] ?? '', 100);
$last  = clean($in['lastName'] ?? '', 100);
$email = clean($in['email'] ?? '', 255);
$phone = clean($in['phone'] ?? '', 40);
$room  = clean($in['roomName'] ?? '', 200);
$ci    = clean($in['checkIn'] ?? '', 10);
$co    = clean($in['checkOut'] ?? '', 10);
$guests = (int)($in['guests'] ?? 0);
$notes = mb_substr(trim((string)($in['notes'] ?? '')), 0, 2000);

if ($first === '' || $last === '') out(false, 'Nome obbligatorio.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) out(false, 'Email non valida.');
if (mb_strlen($phone) < 4) out(false, 'Telefono obbligatorio.');
if ($room === '') out(false, 'Camera non valida.');
if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $ci) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $co)) out(false, 'Date non valide.');
if ($co <= $ci) out(false, 'Il check-out deve essere successivo al check-in.');
if ($ci < date('Y-m-d')) out(false, 'La data di check-in non può essere nel passato.');
if ($guests < 1 || $guests > 20) out(false, 'Numero ospiti non valido.');

$rows = ['Camera' => $room, 'Check-in' => itDate($ci), 'Check-out' => itDate($co), 'Ospiti' => (string)$guests];
$table = '';
foreach ($rows as $k => $v) $table .= "<tr><td style='padding:6px 12px;color:#777'>$k</td><td style='padding:6px 12px'><b>" . h($v) . "</b></td></tr>";

function send($to, $subject, $html, $replyTo, $from, $name) {
  $headers  = "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n";
  $headers .= 'From: =?UTF-8?B?' . base64_encode($name) . "?= <$from>\r\n";
  $headers .= "Reply-To: $replyTo\r\n";
  return mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $html, $headers, '-f' . $from);
}

$adminHtml = "<div style='font-family:Arial,sans-serif;max-width:560px'><h2>Nuova richiesta di prenotazione</h2>
<table style='border-collapse:collapse;background:#f6f6f6'>$table
<tr><td style='padding:6px 12px;color:#777'>Nome</td><td style='padding:6px 12px'><b>" . h("$first $last") . "</b></td></tr>
<tr><td style='padding:6px 12px;color:#777'>Email</td><td style='padding:6px 12px'>" . h($email) . "</td></tr>
<tr><td style='padding:6px 12px;color:#777'>Telefono</td><td style='padding:6px 12px'>" . h($phone) . "</td></tr>
<tr><td style='padding:6px 12px;color:#777'>Note</td><td style='padding:6px 12px'>" . ($notes !== '' ? nl2br(h($notes)) : '—') . "</td></tr></table></div>";

$clientHtml = "<div style='font-family:Georgia,serif;max-width:560px;color:#3b2f25'><h2>Grazie " . h($first) . "!</h2>
<p>Abbiamo ricevuto la tua richiesta di prenotazione presso $NAME. Ti risponderemo entro 24 ore per confermare la disponibilità.</p>
<table style='border-collapse:collapse;background:#faf6ef;border:1px solid #e5dccb'>$table</table>
<p style='font-size:12px;color:#888'>La richiesta non è ancora una prenotazione confermata.</p></div>";

$okAdmin = send($OWNER, "Nuova richiesta di prenotazione · $room · $first $last", $adminHtml, $email, $FROM, $NAME);
if (!$okAdmin) out(false, 'Impossibile inviare la richiesta, riprova più tardi o contattaci telefonicamente.');
send($email, 'Abbiamo ricevuto la tua richiesta di prenotazione', $clientHtml, $OWNER, $FROM, $NAME);
out(true);
