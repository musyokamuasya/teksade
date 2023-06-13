
import { createClient } from '@supabase/supabase-js'
import { Database } from './schema'

const supabaseUrl = 'https://oulmqklivrbzoqabsrsc.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient<Database>(supabaseUrl, supabaseKey!)