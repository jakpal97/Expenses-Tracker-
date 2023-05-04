import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
	'https://gafknykfzhxlzmcjeyif.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZmtueWtmemh4bHptY2pleWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMjU1MDAsImV4cCI6MTk5ODgwMTUwMH0.TQzhluNyaV9FuFyhQAVs-rVeQfa-Zo2bAUTe3NZcc2w'
)

export default supabase
